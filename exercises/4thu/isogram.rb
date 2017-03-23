def isogram(string)
  string_arr = string.downcase.split('')
  str_hash = {}
  count = 0
  string_arr.each do |let|
    if !str_hash[let]
      str_hash[let] = 1
    else
      return "#{string}: #{false} #{count}"
    end
    count += 1
  end
  return "#{string}: #{true} #{count}"
end


puts isogram('aba')
puts isogram('abc')
