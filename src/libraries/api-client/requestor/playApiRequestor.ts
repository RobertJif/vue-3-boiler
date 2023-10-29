import { appConfig } from '@/configs/app'
import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { defaultBadRequestError, defaultInternalServerError } from '.'
type PlayBadRequestType = {
  errorCode: string
  errorMessage: string
  propertyName: string
}

type PlayInternalErrorType = {
  detail: string
  status: 500
  title: string
  traceId: string
  type: string
}

type PlayErrorResponseType = PlayBadRequestType[] | PlayInternalErrorType | undefined

type PlayHttpErrorCode = 'ERR_BAD_REQUEST' | 'ERR_BAD_RESPONSE'
type HttpError<TError> = AxiosError<TError> & {
  code: PlayHttpErrorCode
}
const onRequestFulfilled = <TData>(config: InternalAxiosRequestConfig<TData>) => {
  // config.headers["lang"] = i18n.locale
  return config
}
const onRequestRejected = (error: AxiosError) => {
  return Promise.reject(error)
}

const onResponseFulfilled = <TData>(config: AxiosResponse<TData>) => {
  return config
}

const isBadRequestError = (errorData: PlayErrorResponseType): errorData is PlayBadRequestType[] => {
  return (
    Array.isArray(errorData) && errorData.length > 0 && errorData?.[0]?.propertyName !== undefined
  )
}
const isInternalServerError = (
  errorData: PlayErrorResponseType
): errorData is PlayInternalErrorType => {
  return !Array.isArray(errorData) && errorData?.status !== undefined
}
const onResponseRejected = (
  error: HttpError<PlayErrorResponseType>
): Promise<HttpRequestErrorType> => {
  if (error.response === undefined) return Promise.reject(defaultInternalServerError)
  else if (isBadRequestError(error.response.data)) {
    const errorResponse = defaultBadRequestError
    for (let i = 0; i < error.response.data.length; i++) {
      const { propertyName, errorCode } = error.response.data[i]
      // TODO: find way to bypass this because in this function the request parameter is generic but too broad
      // @ts-ignore
      errorResponse[propertyName] = `serverError.${errorCode}`
    }
    return Promise.reject(errorResponse)
  } else if (isInternalServerError(error.response.data)) {
    const errorResponse = { ...defaultInternalServerError }
    const { detail } = error.response.data
    console.log(detail)
    return Promise.reject(errorResponse)
  }

  return Promise.reject(defaultInternalServerError)
}
const createPlayApiRequestor = () => {
  const requestor = axios.create({
    baseURL: appConfig.API_BASE_URL
  })

  requestor.interceptors.request.use(onRequestFulfilled, onRequestRejected)
  requestor.interceptors.response.use(onResponseFulfilled, onResponseRejected)

  return requestor
}

const playApiRequestor = createPlayApiRequestor()

export default playApiRequestor
