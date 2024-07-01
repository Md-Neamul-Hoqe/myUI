export default function toggleClass(add: string, remove: string) {
  if (window.document) {
    const HTMLElement = document.getElementsByTagName("html")[0];
    HTMLElement?.classList.remove(remove);
    HTMLElement?.classList.add(add);
  }
}
