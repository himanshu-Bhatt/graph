import {
  Activate as ActivateEvent,
  AddCollateral as AddCollateralEvent,
  Closed as ClosedEvent,
  Liquidate as LiquidateEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Propose as ProposeEvent,
  Repaid as RepaidEvent,
  Repay as RepayEvent,
  WithdrawCollateral as WithdrawCollateralEvent
} from "../generated/Exchange/Exchange"
import {
  Activate,
  AddCollateral,
  Closed,
  Liquidate,
  OwnershipTransferred,
  Propose,
  Repaid,
  Repay,
  WithdrawCollateral
} from "../generated/schema"

export function handleActivate(event: ActivateEvent): void {
  let entity = new Activate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}

export function handleAddCollateral(event: AddCollateralEvent): void {
  let entity = new AddCollateral(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}

export function handleClosed(event: ClosedEvent): void {
  let entity = new Closed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lender = event.params.lender
  entity.borrower = event.params.borrower
  entity.id = event.params.id
  entity.save()
}

export function handleLiquidate(event: LiquidateEvent): void {
  let entity = new Liquidate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.remainingValue = event.params.remainingValue
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePropose(event: ProposeEvent): void {
  let entity = new Propose(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lender = event.params.lender
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}

export function handleRepaid(event: RepaidEvent): void {
  let entity = new Repaid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.lender = event.params.lender
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateralEvent): void {
  let entity = new WithdrawCollateral(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.id = event.params.id
  entity.amount = event.params.amount
  entity.save()
}
