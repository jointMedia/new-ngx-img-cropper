import { AfterViewInit, OnChanges, OnDestroy, ElementRef, EventEmitter, Renderer2, SimpleChanges } from '@angular/core';
import { CropperSettings } from './cropper-settings';
import { ImageCropper } from './imageCropper';
import { CropPosition } from './model/cropPosition';
import * as ɵngcc0 from '@angular/core';
export declare class ImageCropperComponent implements AfterViewInit, OnChanges, OnDestroy {
    private document;
    cropcanvas: ElementRef;
    fileInput: ElementRef;
    settings: CropperSettings;
    image: any;
    inputImage: any;
    cropper: ImageCropper;
    cropPosition: CropPosition;
    cropPositionChange: EventEmitter<CropPosition>;
    private exif;
    onCrop: EventEmitter<any>;
    imageSet: EventEmitter<boolean>;
    croppedWidth: number;
    croppedHeight: number;
    intervalRef: number;
    raf: number;
    renderer: Renderer2;
    windowListener: EventListenerObject;
    private isCropPositionUpdateNeeded;
    private dragUnsubscribers;
    constructor(renderer: Renderer2, document: any);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onTouchMove(event: TouchEvent): void;
    onTouchStart(event: TouchEvent): void;
    onTouchEnd(event: TouchEvent): void;
    onMouseDown(event: MouseEvent): void;
    private removeDragListeners;
    onMouseUp(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    fileChangeListener($event: any): void;
    private resize;
    reset(): void;
    setImage(image: HTMLImageElement, newBounds?: any): void;
    private isCropPositionChanged;
    private updateCropBounds;
    private getOrientedImage;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ImageCropperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ImageCropperComponent, "img-cropper", never, { "settings": "settings"; "cropper": "cropper"; "image": "image"; "inputImage": "inputImage"; "cropPosition": "cropPosition"; }, { "cropPositionChange": "cropPositionChange"; "onCrop": "onCrop"; "imageSet": "imageSet"; }, never, never, false>;
}

//# sourceMappingURL=image-cropper.component.d.ts.map