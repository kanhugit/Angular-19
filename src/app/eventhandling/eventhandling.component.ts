import { Component } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  imports: [],
  templateUrl: './eventhandling.component.html',
  styleUrl: './eventhandling.component.css',
})
export class EventhandlingComponent {
  // constructor() { }

  onClick(event: MouseEvent): void {
    console.log('Button clicked!', event);
  }

  onMouseOver(event: MouseEvent): void {
    console.log('Mouse over the button!', event);
  }

  onKeyPress(event: KeyboardEvent): void {
    console.log('Key pressed:', event.key);
  }
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }
  onFocus(event: FocusEvent): void {
    console.log('Input focused:', event);
  }
  onBlur(event: FocusEvent): void {
    console.log('Input blurred:', event);
  }
  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted!', event);
  }
  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    console.log('Option selected:', selectElement.value);
  }
  onChange(event: Event): void {
    const checkboxElement = event.target as HTMLInputElement;
    console.log('Checkbox changed:', checkboxElement.checked);
  }
  onDragStart(event: DragEvent): void {
    console.log('Drag started:', event);
  }
  onDrop(event: DragEvent): void {
    event.preventDefault(); // Prevent default behavior
    console.log('Dropped:', event);
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Allow drop
    console.log('Dragging over:', event);
  }
  onContextMenu(event: MouseEvent): void {
    event.preventDefault(); // Prevent default context menu
    console.log('Right-click context menu:', event);
  }
  onTouchStart(event: TouchEvent): void {
    console.log('Touch started:', event);
  }
  onTouchEnd(event: TouchEvent): void {
    console.log('Touch ended:', event);
  }
  onTouchMove(event: TouchEvent): void {
    console.log('Touch moved:', event);
  }
  onScroll(event: Event): void {
    console.log('Scrolled:', event);
  }
  onResize(event: UIEvent): void {
    console.log('Window resized:', event);
  }
  onAnimationStart(event: AnimationEvent): void {
    console.log('Animation started:', event);
  }
  onAnimationEnd(event: AnimationEvent): void {
    console.log('Animation ended:', event);
  }
  onTransitionEnd(event: TransitionEvent): void {
    console.log('Transition ended:', event);
  }
  onCopy(event: ClipboardEvent): void {
    console.log('Content copied:', event);
  }
  onCut(event: ClipboardEvent): void {
    console.log('Content cut:', event);
  }
  onPaste(event: ClipboardEvent): void {
    console.log('Content pasted:', event);
  }
  onInput(event: Event): void {
    console.log('Input event:', event);
  }
  onWheel(event: WheelEvent): void {
    console.log('Mouse wheel scrolled:', event);
  }
  onPointerDown(event: PointerEvent): void {
    console.log('Pointer down:', event);
  }
  onPointerUp(event: PointerEvent): void {
    console.log('Pointer up:', event);
  }
  onPointerMove(event: PointerEvent): void {
    console.log('Pointer moved:', event);
  }
  onPointerOver(event: PointerEvent): void {
    console.log('Pointer over:', event);
  }
  onPointerOut(event: PointerEvent): void {
    console.log('Pointer out:', event);
  }
  onPointerEnter(event: PointerEvent): void {
    console.log('Pointer entered:', event);
  }
  onPointerLeave(event: PointerEvent): void {
    console.log('Pointer left:', event);
  }
  onDrag(event: DragEvent): void {
    console.log('Dragging:', event);
  }
  onDragEnd(event: DragEvent): void {
    console.log('Drag ended:', event);
  }
  onBeforeUnload(event: BeforeUnloadEvent): void {
    event.preventDefault(); // Prevent default behavior
    console.log('Before unload:', event);
    // Note: Returning a string is not allowed in Angular event handlers with void return type
  }
  onPageHide(event: PageTransitionEvent): void {
    console.log('Page hidden:', event);
  }
  onPageShow(event: PageTransitionEvent): void {
    console.log('Page shown:', event);
  }
  onVisibilityChange(event: Event): void {
    console.log('Visibility changed:', document.visibilityState);
  }
  onFullScreenChange(event: Event): void {
    console.log('Full screen change:', document.fullscreenElement);
  }
  onError(event: ErrorEvent): void {
    console.error('Error occurred:', event);
  }
  onLoad(event: Event): void {
    console.log('Content loaded:', event);
  }
  onUnload(event: Event): void {
    console.log('Content unloaded:', event);
  }
  onHashChange(event: HashChangeEvent): void {
    console.log('Hash changed:', event.newURL);
  }
  onPopState(event: PopStateEvent): void {
    console.log('Pop state:', event.state);
  }
  onStorage(event: StorageEvent): void {
    console.log('Storage event:', event);
  }

  onMessage(event: MessageEvent): void {
    console.log('Message received:', event.data);
  }
  onOnline(event: Event): void {
    console.log('Browser is online:', event);
  }
  onOffline(event: Event): void {
    console.log('Browser is offline:', event);
  }
  onLanguageChange(event: Event): void {
    console.log('Language changed:', navigator.language);
  }
  onResizeObserver(event: ResizeObserverEntry[]): void {
    event.forEach((entry) => {
      console.log(
        'Element resized:',
        entry.target,
        'New size:',
        entry.contentRect
      );
    });
  }
  onIntersectionObserver(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      console.log(
        'Element intersection:',
        entry.target,
        'Is intersecting:',
        entry.isIntersecting
      );
    });
  }
  onPointerLockChange(event: Event): void {
    console.log('Pointer lock change:', document.pointerLockElement);
  }
  onPointerLockError(event: Event): void {
    console.error('Pointer lock error:', event);
  }
  onGamepadConnected(event: GamepadEvent): void {
    console.log('Gamepad connected:', event.gamepad);
  }
  onGamepadDisconnected(event: GamepadEvent): void {
    console.log('Gamepad disconnected:', event.gamepad);
  }
  onTouchCancel(event: TouchEvent): void {
    console.log('Touch canceled:', event);
  }
  onCompositionStart(event: CompositionEvent): void {
    console.log('Composition started:', event);
  }
  onCompositionEnd(event: CompositionEvent): void {
    console.log('Composition ended:', event);
  }
  onCompositionUpdate(event: CompositionEvent): void {
    console.log('Composition updated:', event);
  }
  onScrollToTop(event: Event): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top:', event);
  }
  onScrollToBottom(event: Event): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    console.log('Scrolled to bottom:', event);
  }
  onScrollToLeft(event: Event): void {
    window.scrollTo({ left: 0, behavior: 'smooth' });
    console.log('Scrolled to left:', event);
  }
  onScrollToRight(event: Event): void {
    window.scrollTo({ left: document.body.scrollWidth, behavior: 'smooth' });
    console.log('Scrolled to right:', event);
  }
  onScrollToElement(event: Event, elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with ID ${elementId}:`, event);
    } else {
      console.warn(`Element with ID ${elementId} not found.`);
    }
  }
  onScrollToTopLeft(event: Event): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    console.log('Scrolled to top left:', event);
  }
  onScrollToTopRight(event: Event): void {
    window.scrollTo({
      top: 0,
      left: document.body.scrollWidth,
      behavior: 'smooth',
    });
    console.log('Scrolled to top right:', event);
  }
  onScrollToBottomLeft(event: Event): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
    console.log('Scrolled to bottom left:', event);
  }
  onScrollToBottomRight(event: Event): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: document.body.scrollWidth,
      behavior: 'smooth',
    });
    console.log('Scrolled to bottom right:', event);
  }
  onScrollToElementBySelector(event: Event, selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with selector ${selector}:`, event);
    } else {
      console.warn(`Element with selector ${selector} not found.`);
    }
  }
  onScrollToElementByClass(event: Event, className: string): void {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with class ${className}}:`, event);
    } else {
      console.warn(`Element with class ${className} not found.`);
    }
  }

  onScrollToElementByTag(event: Event, tagName: string): void {
    const element = document.querySelector(tagName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with tag ${tagName}:`, event);
    } else {
      console.warn(`Element with tag ${tagName} not found.`);
    }
  }

  onScrollToElementById(event: Event, id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with ID ${id}:`, event);
    } else {
      console.warn(`Element with ID ${id} not found.`);
    }
  }

  onScrollToElementByName(event: Event, name: string): void {
    const element = document.getElementsByName(name)[0];
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to element with name ${name}:`, event);
    } else {
      console.warn(`Element with name ${name} not found.`);
    }
  }

  onScrollToElementByAttribute(
    event: Event,
    attribute: string,
    value: string
  ): void {
    const element = document.querySelector(`[${attribute}="${value}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(
        `Scrolled to element with attribute ${attribute}="${value}":`,
        event
      );
    } else {
      console.warn(`Element with attribute ${attribute}="${value}" not found.`);
    }
  }
}
