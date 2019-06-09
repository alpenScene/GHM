export enum EVENT {
  BOMB_PLANT = 'BOMB_PLANT',
  BOMB_DEFUSE = 'BOMB_DEFUSE',
  BOMB_EXPLODE = 'BOMB_EXPLODE',
  ROUND_START = 'ROUND_START',
  ROUND_END = 'ROUND_END',
  FREEZETIME_START = 'FREEZETIME_START',
  FREEZETIME_END = 'FREEZETIME_END',
  GAME_START = 'GAME_START',
  GAME_END = 'GAME_END',
  PAUSE_START = 'PAUSE_START',
  PAUSE_END = 'PAUSE_END',
  WARMUP_START = 'WARMUP_START',
  WARMUP_END = 'WARMUP_END',
  MAP_CHANGED = 'MAP_CHANGED',
  CLIENT_DISCONNECT = 'CLIENT_DISCONNECT',
  CLIENT_CONNECT = 'CLIENT_CONNECT',
  SERVER_DISCONNECT = 'SERVER_DISCONNECT',
  SERVER_CONNECT = 'SERVER_CONNECT'
}

export enum PHASE {
  FREEZETIME = 'freezetime',
  BOMB = 'bomb',
  WARMUP = 'warmup',
  LIVE = 'live',
  OVER = 'over',
  DEFUSE ='defuse'
}

export enum BOMB {
  PLANTED = 'planted',
  PLANTING = 'planting',
  EXPLODED = 'exploded',
  DEFUSING = 'defusing',
  DEFUSED = 'defused',
  CARRIED = 'carried',
  DROPPED = 'dropped'
}

export enum SOCKET {
  ALLPLAYERS = 'UPDATE_ALLPLAYERS',
  PLAYER = 'UPDATE_PLAYER',
  MAP = 'UPDATE_MAP',
  PHASE = 'UPDATE_PHASE',
  STATUS = 'UPDATE_STATUS',
  EVENTS = 'UPDATE_EVENTS',
  STATS = 'UPDATE_STATS',
  GAME_CONFIG = 'UPDATE_GAME_CONFIG',
  GAME_CONFIG_RESET = 'RESET_GAME_CONFIG',
  BOMB = 'UPDATE_BOMB',
  TEAM_CONFIG = 'UPDATE_TEAM_CONFIG'
}

export interface StatsCalculation {
  CT: TeamStats
  T: TeamStats
}

export interface TeamStats {
  nades: {
    smokes: number
    grenades: number
    molotovs: number
    flashes: number
  }
  teamEconomy: number
}

export interface Configs {
  useRadar: boolean
}

export type TeamType = 'T' | 'CT'

export interface Country {
  key: string
  value: string
  flag: string
  text: string
}

export type ListElement = {
  key: string
  value: string
  text: string
  image: { avatar: boolean, src: string }
}

export interface Countries {
  countries: Array<Country>
}

export interface Maps {
  maps: Array<string>
}

export interface PlayerSchema {
  firstName: string
  lastName: string
  gameName: string
  country: string
  steam64id: string
  team: string
  hasImage: boolean
  imagePath: string | null
}

export interface TeamSchema {
  teamNameShort: string
  teamNameLong: string
  country: string
  hasLogo: boolean
  logoPath: string
}

export interface MatchSchema {
  teamA: string
  teamB: string
  isLive: boolean
}

// ! FIX any properties ! //
export interface GameState {
  provider: Provider
  map: CurrentMap | any
  player: Player | any
  allplayers: Allplayers | any
  phase_countdowns: Phase_countdowns | any
  grenades: Grenades
  previously: Previously
  bomb: BombState | any
  auth: Auth
}

export interface BombState {
  state: BOMB
  position: string
  player?: number
  countdown?: string
}

export interface Provider {
  name: string
  appid: number
  version: number
  steamid: string
  timestamp: number
}

export interface CurrentMap {
  mode: string
  name: string
  phase: PHASE
  round: number
  team_ct: Team
  team_t: Team
  num_matches_to_win_series: number
  current_spectators: number
  souvenirs_total: number
  round_wins: { [key: string]: string}
}

export interface Team {
  name?: string,
  score: number
  consecutive_round_losses: number
  timeouts_remaining: number
  matches_won_this_series: number
}

export interface Player {
  clan?: string
  steamid?: string
  name?: string
  observer_slot?: number
  team?: string
  activity?: string
  state?: State
  spectarget?: string
  position: string | string[]
  forward: string | string[]
}

export interface State {
  health: number
  armor: number
  helmet: boolean
  flashed: number
  smoked?: number
  burning: number
  money: number
  round_kills: number
  round_killhs: number
  round_totaldmg: number
  equip_value: number
  defusekit?: boolean
}

export interface Allplayers {
  [key: number]: PlayerList
}

export interface PlayerList {
  clan?: string
  name?: string
  observer_slot?: number
  team?: string
  state?: State
  match_stats?: Match_stats
  weapons: Weapons
  position: string | string[]
  forward: string | string[]
}

export interface Match_stats {
  kills: number
  assists: number
  deaths: number
  mvps: number
  score: number
}

export interface Weapons {
  [key: string]: Weapon
}

export interface Weapon {
  name: string
  paintkit?: string
  type: string
  state: string
  ammo_clip?: number
  ammo_clip_max?: number
  ammo_reserve?: number
}

interface Phase_countdowns {
  phase: PHASE
  phase_ends_in: string
}

export interface Grenades {
  [key: string]: Grenade
}

export interface Grenade {
  owner?: number
  position: string
  velocity: string
  lifetime: string
  type?: string
  effecttime?: string
}

export interface Previously {
  player?: Player
  allplayers?: Allplayers
  phase_countdowns?: Phase_countdowns
  grenades?: Grenades
  map?: CurrentMap
  bomb?: BombState
}

export interface Auth {
  token: string
}

export interface RefactoredMatch {
  teamA: TeamConfig
  teamB: TeamConfig
  players: {
    [key: string]: PlayerConfig
  }
}

export interface RawMatch {
  match: RMatch
  teams: Array<RTeam>
  players: Array<RPlayer>
}

export interface RMatch {
  isLive: boolean
  _id: string
  teamA: string
  teamB: string
}

export interface RTeam {
  hasLogo: boolean
  _id: string
  teamNameShort: string
  teamNameLong: string | null
  country: string | null
  logoPath: string | null
}

export interface RPlayer {
  hasImage: boolean
  _id: string
  steam64id: string,
  firstName: string | null,
  lastName: string | null,
  gameName: string,
  country: string | null,
  team: string,
  imagePath: string | null,
}

export interface TeamConfig {
  team: TeamType
  customName: null | string
  customLogo: null | string
  country: null | string
  players: {
    [key: string]: PlayerConfig
  }
}

export interface PlayerConfig {
  teamName: string
  firstName: string | null
  lastName: string | null
  gameName: string | null
  country: string | null
  hasImage: boolean
  imagePath: string | null
}