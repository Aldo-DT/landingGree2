import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductSlider, TeamSlider, TestimonialSlider } from '../../shared/data/slider';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];
  public TestimonialSliderConfig: any = TestimonialSlider;
  //public breadcrum: any[] = [];

  constructor(private _sanitizer:DomSanitizer,
    public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }
  

  public ProductSliderConfig: any = ProductSlider;

  public testimonial = [{
    image: 'assets/images/testimonial/beneficios1.png',
    name: 'iFEEL – Control Remoto Inteligente',
    description: 'Esta tecnología permite al usuario disfrutar de la temperatura real en su ubicación de la habitación. Al iniciar la función iFeel se activa un termostato interno que está en el Control Remoto Inteligente y se desactiva el termostato de la unidad. Por lo que en el momento en que la temperatura de la habitación aumenta o baja más de lo deseado por el usuario, el Control Remoto Inteligente se activará regulando la temperatura a un metro alrededor del Control Remoto Inteligente, hasta que esta llegue a la que el usuario ha indicado, y garantizamos que en donde se encuentre de la habitación el usario siempre disfrutará de la temperatura deseada.',
  }, {
    image: 'assets/images/testimonial/beneficios2.png',
    name: 'FILTROS PURE AIR',
    description: 'Filtro de Carbono Activado – Elimina olores – El carbón activado puede absorber con eficacia humo, olores de mascotas y otros olores desagradables. Filtro Esterilización Biológica – Elimina olores y bacterias – Se pueden eliminar eficazmente las bacterias y se previenen y la prevención las causas de olores desagradables. Filtro Photocatalístico – Elimina olores, bacterias, y virus – Este filtro es capaz de oxidar completamente y degradar contaminantes orgánicos. Se pueden eliminar eficazmente 99.9% de las bacterias, virus y olores desagradables. *Aditamentos que se venden por separado',
  }, {
    image: 'assets/images/testimonial/beneficios3.png',
    name: '20% MAYOR FLUJO DE AIRE',
    description: 'Nuestros modelos cuentan con la modalidad X-FAN, que ayuda a incrementar hasta 20% mas el flujo de aire maximizando los tiempos de enfriamiento y temperatura ideal.',
  }, {
    image: 'assets/images/testimonial/beneficios4.png',
    name: 'TECNOLOGÍA INVERTER',
    description: 'Nuestros modelos INVERTER 16 SEER cuenta con la novedosa tecnología inverter, que regula la velocidad del compresor para proveer los parámetros de enfriamiento deseados. Esta tecnología utilizada logra ahorra hasta un 60% mas, adicional a lograr niveles de enfria',
  }, {
    image: 'assets/images/testimonial/beneficios5.png',
    name: 'R410A – GAS REFRIGERANTE ECOLÓGICO',
    description: 'Nuestros modelos INVERTER 16 SEER, cuentan con gas refrigerante ecológico R410a. Es un gas refrigerante eco-amigable que empieza a ser utilizado a nivel mundial y viene a reemplazar al R22.',
  }, {
    image: 'assets/images/testimonial/beneficios6.png',
    name: '25% MAYOR AHORRO',
    description: 'El Ahorro en tu hogar es muy importante para Gree. Todos nuestros productos te ofrecen un ahorro considerable.',
  }, {
    image: 'assets/images/testimonial/beneficios7.png',
    name: '60% MAYOR AHORRO',
    // designation: 'Lead Developer',
    description: 'Con nuestros modelos INVERTER 16 SEER, ahorra hasta un 60% más. Nuestra novedosa tecnología inverter aumenta la eficiencia y desempeño hasta un 60% más.',
  }
]

  

  // tslint:disable-next-line: member-ordering
  public sliders = [{
    title: '',
    subTitle: '',
    image: 'assets/images/icon/distribuidores.png'
  },
  // {
  //   title: 'welcome to Corporativo Dragon Trade',
  //   subTitle: 'Aires Acondicionados',
  //   image: 'assets/images/icon/logo_GREE.svg'
  // },
]
  
  // services
  // tslint:disable-next-line: member-ordering
  public categories = [{
    image: 'assets/images/categories/control.png',
    title: 'auto parts',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
  }, {
    image: 'assets/images/categories/minisplit.png',
    title: 'brakes & steering',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
  }, {
    image: 'assets/images/categories/paquetes.png',
    title: 'engine & drivetrain',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
  }, {
    image: 'assets/images/categories/minisplit.png',
    title: 'exterior accesories',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
  }, {
    image: 'assets/images/categories/10.jpg',
    title: 'other parts',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
  }]


  // Collection banner
  // tslint:disable-next-line: member-ordering
  public collections = [{
    image: 'assets/images/collection/fashion/1.jpg',
    save: 'save 50%',
    title: 'men'
  }, {
    image: 'assets/images/collection/fashion/2.jpg',
    save: 'save 50%',
    title: 'women'
  }];

  // Blog
  // tslint:disable-next-line: member-ordering
  public blog = [{
    image: 'assets/images/blog/1.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/2.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/3.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/4.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }];

  // Logo
  // tslint:disable-next-line: member-ordering
  public logo = [{
    image: 'assets/images/logos/1.png',
  }, {
    image: 'assets/images/logos/2.png',
  }, {
    image: 'assets/images/logos/3.png',
  }, {
    image: 'assets/images/logos/4.png',
  }, {
    image: 'assets/images/logos/5.png',
  }, {
    image: 'assets/images/logos/6.png',
  }, {
    image: 'assets/images/logos/7.png',
  }, {
    image: 'assets/images/logos/8.png',
  }];

  ngOnInit(): void {
    
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }
  
}
