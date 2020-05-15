export const getSelectedText = ({
  anchorOffset: selectionStart,
  focusOffset: selectionEnd,
  focusNode: selectedElement,
}: Selection): string | null => {
  const text = selectedElement?.textContent?.slice(selectionStart, selectionEnd)

  return text?.length ? text : null
}
