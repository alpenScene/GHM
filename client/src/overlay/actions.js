// @flow
import type {
  AllPlayers,
  MapState,
  PhaseCooldowns,
  CurrentPlayer
} from './types'

import type { Status } from '../dashboard/types'

export type Action = { type: 'set-game-all-player-state', gameStateAllPlayer: AllPlayers}
  | { type: 'set-game-player-state', gameStatePlayer: CurrentPlayer}
  | { type: 'set-game-map-state', gameStateMap: MapState}
  | { type: 'set-game-phase-state', gameStatePhase: PhaseCooldowns}
  | { type: 'set-status-overlay', status: Status }

export const setGameAllPlayerState = (gameStateAllPlayer: AllPlayers) => ({
  type: 'set-game-all-player-state',
  gameStateAllPlayer
})

export const setGamePlayerState = (gameStatePlayer: CurrentPlayer) => ({
  type: 'set-game-player-state',
  gameStatePlayer
})

export const setGameMapState = (gameStateMap: MapState) => ({
  type: 'set-game-map-state',
  gameStateMap
})

export const setGamePhaseState = (gameStatePhase: PhaseCooldowns) => ({
  type: 'set-game-phase-state',
  gameStatePhase
})

export const setStatus = (status: Status) => ({
  type: 'set-status-overlay',
  status
})