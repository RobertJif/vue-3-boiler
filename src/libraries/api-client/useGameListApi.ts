import guestApiRequestor from '@/libraries/api-client/requestor/playApiRequestor'

type GameCodeType = 'TIC_TAC_TOE'
export enum GameStatusEnum {
  ACTIVE,
  INACTIVE,
  MAINTENANCE,
  COMING_SOON
}
type BaseGameType = {
  name: string
  descriptionHTML: string
  gameImagePath: string
  code: GameCodeType
  status: GameStatusEnum
}

type GameSinglePlayerType = BaseGameType & {
  playerCount: 1
}

type GameTwoPlayerType = BaseGameType & {
  playerCount: 2
}
type GameFourPlayerType = BaseGameType & {
  playerCount: 4
}
export type GameResponseType = GameSinglePlayerType | GameTwoPlayerType | GameFourPlayerType

const queryFn = async () => {
  const res = await guestApiRequestor.get<GameResponseType[]>('/api/game')
  return res.data
}
const useGameListApi: IUseQueryDetail<GameResponseType[]> = () => {
  return {
    queryKey: ['game-list'],
    queryFn
  }
}

export default useGameListApi
