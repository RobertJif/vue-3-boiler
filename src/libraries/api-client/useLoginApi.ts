import guestApiRequestor from '@/libraries/api-client/requestor/playApiRequestor'

export type LoginResponseType = {
  accessToken: string
  refreshToken: string
}
export type LoginRequestType = {
  username: string
  password: string
}

const mutationFn = async (body: LoginRequestType) => {
  const res = await guestApiRequestor.post<LoginResponseType>('/api/auth/login', body)
  return res.data
}
const useLoginApi: IUseMutationDetail<LoginRequestType, LoginResponseType> = () => {
  return {
    mutationKey: ['login'],
    mutationFn
  }
}

export default useLoginApi
