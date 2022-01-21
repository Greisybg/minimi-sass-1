# **SASS**

**Apliqué mixin en las paginas toys y clothing en el background de los cuadros de los productos:**

```
@mixin products($bc) {
    background-color: $bc;
}

.mmi_card{
    color: $color-texto;
    box-shadow: 1px 1px 1px 1px rgba(55, 43, 58, 0.8);
    height: 380px;

    &--toys{
        @include products(rgb(229, 211, 236));
    }

    &--clothing{
        @include products(rgb(181, 188, 243));
    }
}

```

**Aplique extend en el style.scss:**

```
.subtitle {
    background-color: $color-secundario;
    border-radius: 0.5ch;

    }

.mmi_product_subtitle_toys{
@extend .subtitle;
color: map-get($subtittlebg, toys); 
}

.mmi_product_subtitle_clothing{
@extend .subtitle;
color: map-get($subtittlebg, clothing);
}

```

Definí el siguiente mapa en scss de "variables":

```

$subtittlebg: ("toys": #fff203,"clothing": #000000,"location": #CCCCCC) 
```

Esto se aplica en las paginas toys y chothing.


# **Para mejorar el SEO:**

Coloqué meta keywords, meta description en el index y cambié los titulos para cada pagina de mi sitio.

```
<head>
    <meta charset="UTF-8">
    <title>Tienda de bebes Minimi</title>
    <meta name="keywords" content="Ropa, Juguetes, Bebe, Ropa para chicos, Ropita de bebe">
    <meta name="description" content="Encontrá la ropa para chicos y ropita de bebe mas linda en Minimi, compralos con envío gratis y cuotas!">
</head>
```
