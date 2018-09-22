import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from "./routes";
import {ModalModule} from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { EscrowaccountComponent } from './common/escrowaccount/escrowaccount.component';
import { InventoryComponent } from './common/inventory/inventory.component';
import { ProductmanagementComponent } from './common/productmanagement/productmanagement.component';
import { FlapmanagementComponent } from './common/flapmanagement/flapmanagement.component';
import { MerchantComponent } from './common/merchant/merchant.component';
import { SuppliersetupComponent } from './common/suppliersetup/suppliersetup.component';
import { TransactionsComponent } from './common/accountmanagement/transactions/transactions.component';
import { PaymentsComponent } from './common/accountmanagement/payments/payments.component';
import { EwalletComponent } from './common/accountmanagement/ewallet/ewallet.component';
import { ReferralComponent } from './common/accountmanagement/referral/referral.component';
import { TransactionhistoryComponent } from './common/accountmanagement/transactions/transactionhistory/transactionhistory.component';
import { EodComponent } from './common/accountmanagement/transactions/eod/eod.component';
import { InvoiceComponent } from './common/accountmanagement/transactions/invoice/invoice.component';
import { PaymenthistoryComponent } from './common/accountmanagement/payments/paymenthistory/paymenthistory.component';
import { WallettransactionsComponent } from './common/accountmanagement/ewallet/wallettransactions/wallettransactions.component';
import { TransactionmodalComponent } from './common/accountmanagement/transactions/modal/transactionmodal/transactionmodal.component';
import { EodmodalComponent } from './common/accountmanagement/transactions/modal/eodmodal/eodmodal.component';
import { InvoicemodalComponent } from './common/accountmanagement/transactions/modal/invoicemodal/invoicemodal.component';
import { PaymentmodalComponent } from './common/accountmanagement/payments/modal/paymentmodal/paymentmodal.component';
import { EscrowmodalComponent } from './common/escrowaccount/modal/escrowmodal/escrowmodal.component';
import { MerchantinventoryComponent } from './common/merchantinventory/merchantinventory.component';
import { InventorymodalComponent } from './common/inventory/modal/inventorymodal/inventorymodal.component';
import { AddinventorymodalComponent } from './common/inventory/modal/addinventorymodal/addinventorymodal.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './common/category/category/category.component';
import { AddcategorymodalComponent } from './common/category/modal/addcategorymodal/addcategorymodal.component';
import { EditcategorymodalComponent } from './common/category/modal/editcategorymodal/editcategorymodal.component';
import { CategoryviewComponent } from './common/category/categoryview/categoryview.component';
import { CategorydetailsComponent } from './common/category/categoryview/categorydetails/categorydetails.component';
import { SubcategorylistComponent } from './common/category/categoryview/subcategorylist/subcategorylist.component';
import { AddsubcategorymodalComponent } from './common/category/modal/addsubcategorymodal/addsubcategorymodal.component';
import { EditsubcategorymodalComponent } from './common/category/modal/editsubcategorymodal/editsubcategorymodal.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterService } from "./bll/register-service";
import { AuthGuard } from "./auth/auth.guard";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { SubcategorydetailsComponent } from './common/category/categoryview/subcategorydetails/subcategorydetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    EscrowaccountComponent,
    InventoryComponent,
    ProductmanagementComponent,
    FlapmanagementComponent,
    MerchantComponent,
    SuppliersetupComponent,
    TransactionsComponent,
    PaymentsComponent,
    EwalletComponent,
    ReferralComponent,
    TransactionhistoryComponent,
    EodComponent,
    InvoiceComponent,
    PaymenthistoryComponent,
    WallettransactionsComponent,
    TransactionmodalComponent,
    EodmodalComponent,
    InvoicemodalComponent,
    PaymentmodalComponent,
    EscrowmodalComponent,
    MerchantinventoryComponent,
    InventorymodalComponent,
    AddinventorymodalComponent,
    CategoryComponent,
    AddcategorymodalComponent,
    EditcategorymodalComponent,
    CategoryviewComponent,
    CategorydetailsComponent,
    SubcategorylistComponent,
    AddsubcategorymodalComponent,
    EditsubcategorymodalComponent,
    UsersComponent,
    SigninComponent,
    SubcategorydetailsComponent
  ],

  entryComponents:[
    TransactionmodalComponent,
    EodmodalComponent,
    InvoicemodalComponent,
    PaymentmodalComponent,
    EscrowmodalComponent,
    InventorymodalComponent,
    AddinventorymodalComponent,
    AddcategorymodalComponent,
    EditcategorymodalComponent,
    AddsubcategorymodalComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [RegisterService,AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
