export default function ChainaBook({ Bestseller , Recommended }) {
    return (
      <div className="flex space-x-2">
        {Bestseller && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            สินค้าขายดี
          </span>
        )}
        {Recommended && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            แนะนำ
          </span>
        )}
      </div>
    );
  }