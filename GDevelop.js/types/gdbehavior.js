// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdBehavior {
  constructor(): void;
  clone(): gdBehavior;
  getTypeName(): string;
  getProperties(behaviorContent: gdSerializerElement): gdMapStringPropertyDescriptor;
  updateProperty(behaviorContent: gdSerializerElement, name: string, value: string): boolean;
  initializeContent(behaviorContent: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};