# products/schema.py

import graphene
from graphene_django import DjangoObjectType
from .models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "name", "description", "price", "stock", "created_at", "updated_at")

class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    product_by_id = graphene.Field(ProductType, id=graphene.Int())

    def resolve_all_products(root, info):
        return Product.objects.all()

    def resolve_product_by_id(root, info, id):
        return Product.objects.get(pk=id)

class CreateProduct(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        price = graphene.Float(required=True)
        stock = graphene.Int(required=True)

    product = graphene.Field(ProductType)

    def mutate(self, info, name, description, price, stock):
        product = Product(name=name, description=description, price=price, stock=stock)
        product.save()
        return CreateProduct(product=product)



class Mutation(graphene.ObjectType):
    create_product = CreateProduct.Field()
    
schema = graphene.Schema(query=Query, mutation=Mutation)
