import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function helloWorld() {
  await editor.flashNotification("makechild world!!!");
}
