import TableTransaction from "../../../components/section/transaction/TableTransaction";

const TransactionPage = () => {
  return (
    <div className="space-y-8">
        <h1 className="text-2xl font-bold font-inter">List Transaksi</h1>
        <p className="text-sm font-mulish">List pembelian kelas premium Anda</p>
      <TableTransaction />
    </div>
  );
};
export default TransactionPage;
