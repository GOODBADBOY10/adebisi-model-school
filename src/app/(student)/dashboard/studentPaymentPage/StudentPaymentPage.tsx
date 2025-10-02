export default function StudentPaymentPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Payment of School Fees</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Fee Structure - 2024/2025 Session</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Tuition Fee</span>
                        <span className="font-semibold">$2,500.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Development Levy</span>
                        <span className="font-semibold">$300.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Library Fee</span>
                        <span className="font-semibold">$50.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded border-t-2 border-green-500">
                        <span className="font-bold">Total Amount</span>
                        <span className="font-bold text-green-600">$2,850.00</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
}