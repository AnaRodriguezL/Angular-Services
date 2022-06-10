import { Injectable } from '@angular/core';
import { Category } from '../menu/category';

@Injectable({
    providedIn: 'root'
})

export class ImagenesService {

    public categories: Category[] = [];

    constructor() {
        this.categories = [
            {
                name: "Jeon Jungkook",
                images: [
                    "https://dam.tuenlinea.com/wp-content/uploads/2021/06/que-estudia-jungkook.jpg",
                    "https://heraldodemexico.com.mx/u/fotografias/m/2021/7/21/f608x342-398926_428649_0.jpg",
                    "https://www.sonica.mx/u/fotografias/m/2021/6/14/f850x638-4730_82219_5050.jpg"
                ]
            },
            {
                name: "Kim Taehyung",
                images: [
                    "https://kpoplat.com/wp-content/uploads/2020/12/V-Kim-Taehyung.jpg",
                    "https://larepublica.pe/resizer/FXCZ5vRarJJnn8eYzMMlss-u9fU=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/2TG76B73EFDSNB6EH2EEMUEQYA.jpg",
                    "https://i2.wp.com/spainaigo.com/wp-content/uploads/2020/02/DKNvjNsXcAA0g67.jpg?resize=1200%2C640&ssl=1"
                ]
            },
            {
                name: "Min Yoongi",
                images: [
                    "https://1.bp.blogspot.com/-sEnindvLBhY/XVIq4LmX8rI/AAAAAAAAUEI/HS6BBQm4-CEiDCDJv7eOUfKLzr5mSR7lgCLcBGAs/s1600/suga.jpg",
                    "https://mundo-kpop.info/wp-content/uploads/2019/01/suga-bts.jpg",
                    "https://larepublica.pe/resizer/YwxvGIitHfGwn7_t0oLxCVSmgjo=/480x282/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/47HKEH3IL5FBNKH2YBUH2M47G4.jpg"
                ]
            }
        ]
    }
}
