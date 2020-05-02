export const getSelectedText = ({
  anchorOffset: selectionStart,
  focusOffset: selectionEnd,
  focusNode: selectedElement,
}: Selection): string | null =>
  selectedElement?.textContent?.slice(selectionStart, selectionEnd) ?? null;
