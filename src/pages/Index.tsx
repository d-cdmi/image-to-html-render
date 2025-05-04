
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md">
        <div className="p-6 sm:p-8 border border-gray-300">
          {/* Invoice Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold uppercase">INVOICE</h1>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Left Column - Seller Details */}
            <div>
              <p className="font-bold">Shri Navkar Agritech</p>
              <p>Aacharya Shri Tulsi Marg</p>
              <p>At / Po. : Petlawad</p>
              <p>District : Jhabua [ M. P. ]</p>
              <p>MAN : 1620277</p>
              <p>FSSAI NO: 21423910000063</p>
              <p>GSTIN/UIN: 23ACFPB3828G1Z3</p>
              <p>State Name : Madhya Pradesh, Code : 23</p>
              <div className="mt-4">
                <p className="font-bold">Buyer (Bill to)</p>
                <p className="font-bold">MAHAKALI TRADING CO SURAT</p>
                <p>BROKER: VIJAY BHAI SURAT, 9427794755, 9537098880</p>
                <p>Place of Supply : Gujarat</p>
              </div>
            </div>
            
            {/* Right Column - Invoice Details */}
            <div className="border border-gray-300">
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 border-r border-gray-300">
                  <p>Invoice No.</p>
                  <p className="font-bold">25</p>
                </div>
                <div className="p-2">
                  <p>Dated</p>
                  <p className="font-bold">4-May-25</p>
                </div>
              </div>
              
              <div className="p-2 border-b border-gray-300">
                <p>Delivery Note</p>
                <p className="font-bold">NALANDA ROADLINES</p>
              </div>
              
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 border-r border-gray-300">
                  <p>Reference No. & Date.</p>
                </div>
                <div className="p-2">
                  <p>Other References</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 border-r border-gray-300">
                  <p>Buyer's Order No.</p>
                </div>
                <div className="p-2">
                  <p>Dated</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 border-r border-gray-300">
                  <p>Dispatch Doc No.</p>
                  <p className="font-bold">BILLTY NO 3511</p>
                </div>
                <div className="p-2">
                  <p>Delivery Note Date</p>
                  <p className="font-bold">4-May-25</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 border-b border-gray-300">
                <div className="p-2 border-r border-gray-300">
                  <p>Dispatched through</p>
                  <p className="font-bold">PAPPU 9936718494</p>
                </div>
                <div className="p-2">
                  <p>Destination</p>
                  <p className="font-bold">SURAT</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2">
                <div className="p-2 border-r border-gray-300">
                  <p>Bill of Lading/LR-RR No.</p>
                </div>
                <div className="p-2">
                  <p>Motor Vehicle No.</p>
                  <p className="font-bold">UP62BT4472</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Invoice Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">
                    <div className="flex flex-col">
                      <span>SI</span>
                      <span>No.</span>
                    </div>
                  </th>
                  <th className="border border-gray-300 p-2 text-left">Description of Goods</th>
                  <th className="border border-gray-300 p-2 text-left">HSN/SAC</th>
                  <th className="border border-gray-300 p-2 text-left">Quantity</th>
                  <th className="border border-gray-300 p-2 text-left">Rate</th>
                  <th className="border border-gray-300 p-2 text-left">per</th>
                  <th className="border border-gray-300 p-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Wheat</p>
                    <p className="pl-4">NAVKAR GOLD</p>
                    <p className="pl-4">150 BAGS X 30KGS</p>
                    <p className="pl-4">TUKADI</p>
                  </td>
                  <td className="border border-gray-300 p-2">10011090</td>
                  <td className="border border-gray-300 p-2">45.000 Qtl.</td>
                  <td className="border border-gray-300 p-2">3,200.00</td>
                  <td className="border border-gray-300 p-2">Qtl.</td>
                  <td className="border border-gray-300 p-2">1,44,000.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Wheat</p>
                    <p className="pl-4">NAVKAR PREMIUM</p>
                    <p className="pl-4">150 BAGS X 30KG</p>
                    <p className="pl-4">TUKADI</p>
                  </td>
                  <td className="border border-gray-300 p-2">10011090</td>
                  <td className="border border-gray-300 p-2">45.000 Qtl.</td>
                  <td className="border border-gray-300 p-2">3,200.00</td>
                  <td className="border border-gray-300 p-2">Qtl.</td>
                  <td className="border border-gray-300 p-2">1,44,000.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Wheat</p>
                    <p className="pl-4">777</p>
                    <p className="pl-4">159 BAGS X 30KG</p>
                    <p className="pl-4">TUKADI</p>
                  </td>
                  <td className="border border-gray-300 p-2">10011090</td>
                  <td className="border border-gray-300 p-2">47.700 Qtl.</td>
                  <td className="border border-gray-300 p-2">3,200.00</td>
                  <td className="border border-gray-300 p-2">Qtl.</td>
                  <td className="border border-gray-300 p-2">1,52,640.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Wheat</p>
                    <p className="pl-4">RASOI</p>
                    <p className="pl-4">MTR</p>
                    <p className="pl-4">130 BAGS X 30KG</p>
                  </td>
                  <td className="border border-gray-300 p-2">10011090</td>
                  <td className="border border-gray-300 p-2">39.000 Qtl.</td>
                  <td className="border border-gray-300 p-2">2,900.00</td>
                  <td className="border border-gray-300 p-2">Qtl.</td>
                  <td className="border border-gray-300 p-2">1,13,100.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2" colSpan={3}>
                    <p className="text-right pr-2">Total</p>
                  </td>
                  <td className="border border-gray-300 p-2 font-bold">176.700 Qtl.</td>
                  <td className="border border-gray-300 p-2" colSpan={2}></td>
                  <td className="border border-gray-300 p-2 font-bold">5,53,740.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Amount in Words */}
          <div className="mt-2 border border-gray-300">
            <div className="p-2">
              <p>Amount Chargeable (in words)</p>
              <p className="font-bold">INR Five Lakh Fifty Three Thousand Seven Hundred Forty Only</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
              <div className="p-2 border-r border-gray-300">
                <p className="font-semibold">HSN/SAC</p>
                <p>10011090</p>
              </div>
              <div className="p-2">
                <p className="font-semibold text-right">Taxable Value</p>
                <p className="text-right">5,53,740.00</p>
                <p className="font-bold text-right border-t border-gray-300 mt-2 pt-1">Total 5,53,740.00</p>
              </div>
            </div>
          </div>
          
          {/* Tax Details */}
          <div className="mt-4 border border-gray-300 p-2">
            <p>Tax Amount (in words) : <span className="font-bold">NIL</span></p>
            <p className="font-bold mt-2">Company's Bank Details</p>
            <div className="grid grid-cols-2 gap-1">
              <p>A/c Holder's Name</p>
              <p>: Shri Navkar Agritech</p>
              <p>Bank Name</p>
              <p>: Bank of Baroda</p>
              <p>A/c No.</p>
              <p>: 0719040000185</p>
              <p>Branch & IFS Code</p>
              <p>: Petlawad & BARB0PETLAW</p>
            </div>
            <div className="text-right mt-10">
              <p>for Shri Navkar Agritech</p>
              <p className="mt-10">Authorised Signatory</p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-4">
            <p className="font-semibold">SUBJECT TO PETLAWAD JURISDICTION</p>
            <p className="text-sm mt-1">This is a Computer Generated Invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
