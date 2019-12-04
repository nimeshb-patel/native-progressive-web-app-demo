import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Colors } from '../../enums/colors.enum';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) { }

    async showToast(message: string, color: Colors = Colors.primary, duration: number = 5000) {
        const toast = await this.toastController.create({
            message,
            duration,
            color
        });
        toast.present();
    }
}
