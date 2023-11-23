import { WebContainer } from '@webcontainer/api'

// const webcontainerInstance: = await WebContainer.boot();
let _webcontainerInstance: WebContainer

export async function useWebContainer() {
  if (!_webcontainerInstance)
    _webcontainerInstance = await WebContainer.boot()
  return _webcontainerInstance
}
