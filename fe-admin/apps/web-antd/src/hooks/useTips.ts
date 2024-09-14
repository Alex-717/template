import { message } from "ant-design-vue";

export function useTips () {

  function showTips (text: string, time: number = 1.5) {
    message.info(text, time);
  }
  function showErrTips (text: string, time: number = 1.5) {
    message.error(text, time);
  }
  function showSuccTips (text: string, time: number = 1.5) {
    message.success(text, time)
  }

  return {
    showTips,
    showErrTips,
    showSuccTips
  }
}