import { Directive, HostBinding, PLATFORM_ID, Inject, Input, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') relAttr = null;
  @HostBinding('attr.target') targetAttr = null;
  @Input() href: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private elementRef: ElementRef) {}

  ngOnChanges() {
    this.elementRef.nativeElement.href = this.href;
  
    if (this.isLinkExternal()) {
      // https://developers.google.com/web/tools/lighthouse/audits/noopener
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    } else {
      this.relAttr = null;
      this.targetAttr = null;
    }
  }

  private isLinkExternal() {
    return isPlatformBrowser(this.platformId) && !this.elementRef.nativeElement.hostname.includes(location.hostname);
  }
}