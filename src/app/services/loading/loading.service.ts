import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loader: HTMLIonLoadingElement;

    constructor(private loadingController: LoadingController) { }

    async showLoader(message: string = 'Hang on...') {
        this.loader = await this.loadingController.create({
            message
        });
        await this.loader.present();
    }

    async HideLoader() {
        if (this.loader) {
            await this.loader.dismiss();
        }
    }

}
