import { Component, OnInit } from '@angular/core';
import { BlockchainService } from "../../services/blockchain.service";
import { Transaction } from 'blockchain-demo/src/transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTransaction;
  public walletKey;

  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTransaction = new Transaction();
  }

  createTransaction(): void {
    this.newTransaction.fromAddress = this.walletKey.publicKey;
    this.newTransaction.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTransaction);
    console.log("hi");
    this.newTransaction = new Transaction();
  }

}
