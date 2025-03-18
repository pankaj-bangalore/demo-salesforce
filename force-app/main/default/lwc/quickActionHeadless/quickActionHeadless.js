import { LightningElement } from 'lwc'
import { showToastEvent } from 'lightning/platformShowToastEvent'
import LightningAlert from 'lightning/alert'
import LightningConfirm from 'lightning/confirm'
import LightningPrompt from 'lightning/prompt'

export default class QuickActionHeadless extends LightningElement {
  async invoke() {
    const tostObject = {
      type: 'success',
      label: 'Success',
      message: 'Action button clicked.'
    }
    const tost = new showToastEvent(tostObject)

    this.dispatchEvent(tost)

    //cost alert = new LightningAlert();
    await LightningAlert.open({
      message: 'Message from alert.',
      theme: 'info',
      label: 'Alert'
    })

    const result = await LightningConfirm.open({
      message: 'message from confirm',
      theme: 'info',
      label: 'Confirm'
    })
    console.log(result)

    const value = await LightningPrompt.open({
      message: 'enter value',
      theme: 'info',
      label: 'prompt',
      defaultValue: 'hi'
    })
    console.log(value)
  }
}