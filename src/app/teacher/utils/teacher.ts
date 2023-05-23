import { DanceLevel, DanceStyle } from "src/app/backend/model/teacher";

export const STYLES = [
  {
    value: DanceStyle.kizomba,
    title: 'Кизомба',
  },
  {
    value: DanceStyle.salsa,
    title: 'Сальса',
  },
  {
    value: DanceStyle.bachata,
    title: 'Бачата',
  },
]

export const LEVELS = [
  {
    value: DanceLevel.beginner,
    title: 'Начинающий',
  },
  {
    value: DanceLevel.intermediate,
    title: 'Средний',
  },
  {
    value: DanceLevel.advanced,
    title: 'Высокий',
  },
  {
    value: DanceLevel.pro,
    title: 'Профи',
  },
]
