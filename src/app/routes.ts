import { Routes } from '@angular/router';
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
import { MerchantinventoryComponent } from "./common/merchantinventory/merchantinventory.component";
import { CategoryComponent } from "./common/category/category/category.component";
import { CategoryviewComponent } from "./common/category/categoryview/categoryview.component";
import { CategorydetailsComponent } from "./common/category/categoryview/categorydetails/categorydetails.component";
import { SubcategorylistComponent } from "./common/category/categoryview/subcategorylist/subcategorylist.component";
import { UsersComponent } from "./users/users.component";
import { SigninComponent } from "./users/signin/signin.component";
import { SubcategorydetailsComponent } from "./common/category/categoryview/subcategorydetails/subcategorydetails.component";
import { AddProductComponent } from "./common/productmanagement/add-product/add-product.component";

export const appRoutes : Routes = [
   {
      path : '', redirectTo:'/login',pathMatch : 'full'
    },
    {
    path : 'login', component:UsersComponent,
    children: [{path:'',component:SigninComponent}]
    },
    { 
      path : 'acctmgttrans', component : CommonComponent,
      children:[{path:'',component:TransactionsComponent,
      children:[{path:'',component:TransactionhistoryComponent
        
    }]
      }]
},
{ 
      path : 'acctmgteod', component : CommonComponent,
      children:[{path:'',component:TransactionsComponent,
      children:[{path:'',component:EodComponent

    }]
     }]
},
{ 
      path : 'acctinvoice', component : CommonComponent,
      children:[{path:'',component:TransactionsComponent,
      children:[{path:'',component:InvoiceComponent}]
     }]
},

{ 
      path : 'acctmgtpay', component : CommonComponent,
      children:[{path:'',component:PaymentsComponent,
      children:[{path:'',component:PaymenthistoryComponent
    }]
     }]
},
{
    path: 'escrowacct', component: CommonComponent,
    children:[{path:'',component: EscrowaccountComponent}]
},
{
    path:'inventoryhst',component:CommonComponent,
    children:[{path:'',component:InventoryComponent}]
},
{
    path: 'productmgtcat', component:CommonComponent,
    children:[{path:'',component:CategoryComponent}]
},
{ 
      path : 'pcatdetail', component : CommonComponent,
      children:[{path:'',component:CategoryviewComponent,
      children:[{path:'',component:CategorydetailsComponent
    }]
     }]
},
{ 
      path : 'subcatdetail', component : CommonComponent,
      children:[{path:'',component:SubcategorydetailsComponent
    }]
},
{ 
      path : 'productmgtopt', component : CommonComponent,
      children:[{path:'',component:ProductmanagementComponent
    }]
},
{ 
      path : 'addproduct', component : CommonComponent,
      children:[{path:'',component:AddProductComponent
    }]
},
{ 
      path : 'subcatlst', component : CommonComponent,
      children:[{path:'',component:CategoryviewComponent,
      children:[{path:'',component:SubcategorylistComponent
    }]
     }]
},
{
    path:'inventorymerchant',component:CommonComponent,
    children:[{path:'',component:MerchantinventoryComponent}]
},
{
   path: 'acctmgtreferral',component:CommonComponent,
   children:[{path:'',component:ReferralComponent}]
},  
{
   path: 'supplierset',component:CommonComponent,
   children:[{path:'',component:SuppliersetupComponent}]
},
];
