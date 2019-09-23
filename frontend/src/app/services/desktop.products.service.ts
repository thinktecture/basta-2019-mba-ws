import { ProductsService } from './products.service';

export class DesktopProductsService extends ProductsService {
  public get isDesktop(): boolean {
    return true;
  }
}

