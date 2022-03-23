def buy(item:, price:, count:)
	puts "Anda telah membeli #{item} sebanyak #{count} buah"
	puts "Total harga adalah $#{price * count}"
end

buy(item: "headphone", price: 150, count: 2)