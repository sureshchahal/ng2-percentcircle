import {Component, Input} from '@angular/core';

@Component({
    selector: 'percent-circle',
    template: ` <div><div class="pc-container">
				    <div class="pc-border" [ngStyle] ="setBorderStyles()">
					    <div class="pc-circle" [ngStyle] ="setCircleStyles()">
						    <span class="pc-percent">{{percentage}}%</span>
						</div>
					</div>
				</div></div>
                        `,
    styles: [
        `
            .pc-container {
            position: relative;
            width: 28%;
        }

        .pc-border {
            position: relative;
            text-align: center;
            width: 100%;
            padding-top: 100%;
            border-radius: 100%;
        }

        .pc-circle {
            position: relative;
            margin-top: -90%;
            margin-left: 10%;
            width: 80%;
            padding-top: 80%;
            border-radius: 100%;
        }

        .pc-percent {
            font-family: Arial, sans-serif;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            /*font-size: 3em;*/
        }
        `
    ]
})

export class PercentCircleComponent {  

    constructor()
    {

    }


    @Input()
    percentage: number;

    @Input()
    colors: any;

    get highlightColor(): string {
        return this.colors && this.colors.highLight? this.colors.highLight : '#2BCBED';;
    }

    get remaningColor() : string
    {
        return  this.colors && this.colors.remaining? this.colors.remaining : '#C8E0E8';
    }

    get centerColor(): string{
        return  this.colors && this.colors.center? this.colors.center : '#F5FBFC';
    }

    setBorderStyles() {
        var deg = (this.percentage /100) * 360;
        var color1, color2;

        if(deg > 180)
        {
            deg = deg -90;
            color1 = this.highlightColor;
            color2 = this.remaningColor;
        }
        else
        {
            deg = 90 + deg;
            color1 = this.remaningColor;
            color2 = this.remaningColor;
        }


        let styles = {
            'background-color': this.colors && this.colors.highLight? this.colors.highLight : '#2BCBED',
            'background-image': 'linear-gradient('
                                + deg  + 'deg, transparent 50%,'
                                + color1
                                + ' 50%),linear-gradient(90deg,'
                                + color2 
                                + ' 50%, transparent 50%)'
        };
        
        return styles;
    }

    setCircleStyles() {
        let styles = {
            'background-color': this.centerColor
        };
        
        return styles;
    }

}