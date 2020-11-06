import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.scss']
})
export class DistribuidoresComponent implements OnInit {
  
  // tslint:disable-next-line: semicolon

  

  public products: Product[] = [];
  public productCollections: any[] = [];

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

  

  // tslint:disable-next-line: member-ordering
  public sliders = [{
    title: '',
    subTitle: '',
    image: 'assets/images/icon/minisplit.png'
  },
  {
    title: 'welcome to Corporativo Dragon Trade',
    subTitle: 'Aires Acondicionados',
    image: 'assets/images/icon/logo_GREE.svg'
  },]
  
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