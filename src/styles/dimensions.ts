class ComponentHeight {
  readonly large: number = 44;
}

class FontSize {
  readonly small: number = 12;
  readonly medium: number = 14;
  readonly large: number = 16;
  readonly largex2: number = 20;
}

class Spaces {
  readonly small: number = 8;
  readonly medium: number = 16;
  readonly large: number = 32;
}
export default abstract class dimensions {
  static readonly componentHeight: ComponentHeight = new ComponentHeight();
  static readonly fontSize: FontSize = new FontSize();
  static readonly spaces: Spaces = new Spaces();
  static readonly small: number = 20;
  static readonly medium: number = 40;
  static readonly large: number = 60;
}
