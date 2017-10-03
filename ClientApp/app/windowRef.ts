import { Injectable } from '@angular/core';

function getWindow(): any {
    if (typeof window !== 'undefined') {
        return window;
    }
    else {
        return null;
    }
}

@Injectable()
export class WindowRef {
    get nativeWindow(): any {
        return getWindow();
    }
}