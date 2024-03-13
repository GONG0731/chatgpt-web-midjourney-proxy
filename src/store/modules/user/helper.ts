import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=AI%20logo&step_word=&lid=6720931876808600815&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=110552959,1925661886&os=2753899873,2803990176&simid=110552959,1925661886&pn=215&rn=1&di=7308398814245683201&ln=1807&fr=&fmq=1710307688313_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=d2&objurl=https%3A%2F%2Fproxyimg.sucai999.com%2Fpreimg%2FDBC456%2F700%2FDBC456%2F111%2F335cf9c87ebc2b0b6f45e8d27e7baf4.jpg%3Fx-oss-process%3Dimage%2Fresize%2Ch_320&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwyLDMsMSw2LDQsNSw3LDgsOQ%3D%3D',
      name:  t('mjset.sysname'),//'AI绘图',
      description: 'Star on GJ Study',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
