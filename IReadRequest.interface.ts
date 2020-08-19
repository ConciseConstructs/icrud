export interface IReadRequest {
  accountId:string
  condition?:'all'|'beginsWith'|'isBetween'|'isExactly'|'isGreaterOrEqual'|'isGreaterThan'|'isLessOrEqual'|'isLessThan'
  value?:any
  indexName?:string
  view?:any
  lastEvaluatedKey?:any
  lowerBounds?:any
  upperBounds?:any
}
