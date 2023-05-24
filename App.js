import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { getData } from './src/utils/getData'

export default function App() {
  const [data, setData] = useState(null);
  getData(setData);

  const [factor, setFactor] = useState(1)
  const [result, setResult] = useState(factor * data?.oficial?.value_sell)

  return (
    <View className='flex flex-col bg-[#496afe]  h-full w-full overflow-hidden items-center'>
      <View className='flex-1'>
        {/* Dollar data */}
        <View className='flex flex-row p-2 gap-4 w-full pt-16'>
          <View className='py-6 bg-white rounded-xl flex-1 justify-center items-center'>
            <Text className='text-base font-semibold text-zinc-500 text-center'>Dolar</Text>
            <Text className='text-4xl font-black text-[#496afe]'>${data && (data?.oficial?.value_sell)}</Text>
            <Text className='text-zinc-500'>Compra: <Text className='font-bold text-zinc-700'>${data && (data?.oficial?.value_buy)}</Text></Text>
          </View>
          <View className='py-6 bg-white rounded-xl flex-1 justify-center items-center'>
            <Text className='text-base font-semibold text-zinc-500 text-center'>Dolar Blue</Text>
            <Text className='text-4xl font-black text-[#496afe]'>${data && (data?.blue?.value_sell)}</Text>
            <Text className='text-zinc-500'>Compra: <Text className='font-bold text-zinc-700'>${data && (data?.blue?.value_buy)}</Text></Text>
          </View>
        </View>
        {/* Euro data */}
        <View className='flex flex-row p-2 gap-4 text-zinc-900 w-full'>
          <View className='py-6 bg-white rounded-xl flex-1 justify-center items-center'>
            <Text className='text-base font-semibold text-zinc-500 text-center'>Euro</Text>
            <Text className='text-4xl font-black text-[#496afe]'>${data && (data?.oficial_euro?.value_sell)}</Text>
            <Text className='text-zinc-500'>Compra: <Text className='font-bold text-zinc-700'>${data && (data?.oficial_euro?.value_buy)}</Text></Text>
          </View>
          <View className='py-6 bg-white rounded-xl flex-1 justify-center items-center'>
            <Text className='text-base font-semibold text-zinc-500 text-center'>Euro Blue</Text>
            <Text className='text-4xl font-black text-[#496afe]'>${data && (data?.blue_euro?.value_sell)}</Text>
            <Text className='text-zinc-500'>Compra: <Text className='font-bold text-zinc-700'>${data && (data?.blue_euro?.value_buy)}</Text></Text>
          </View>
        </View>
      </View>
      {/* Converter */}
      <View className="bg-[#f1f7fc] p-4 w-full rounded-t-3xl my-8 flex-1 flex flex-row items-center">
      </View>
      {/* Fill background */}
      <View className='absolute w-full left-0 bottom-0 h-16 bg-[#f1f7fc] -z-10'></View>
    </View>
  )
}
