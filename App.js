import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { getData } from './src/utils/getData'

export default function App() {
  const [data, setData] = useState(null);
  getData(setData);

  let dolar = {
    name: 'Dolar',
    value: 1,
    image: 'https://th.bing.com/th/id/OIP.sm1AGorekmhhkIcpNR87iAAAAA?pid=ImgDet&rs=1'
  }

  let dolarBlue = {
    name: 'Dolar Blue',
    value: 1,
    image: 'https://th.bing.com/th/id/OIP.sm1AGorekmhhkIcpNR87iAAAAA?pid=ImgDet&rs=1'
  }

  let euro = {
    name: 'Euro',
    value: 1,
    image: 'https://th.bing.com/th/id/R.7194489d32e7c71d7b0fb53f7253e018?rik=XJ%2fipuppX9Ja6g&pid=ImgRaw&r=0'
  }

  let euroBlue = {
    name: 'Euro Blue',
    value: 1,
    image: 'https://th.bing.com/th/id/R.7194489d32e7c71d7b0fb53f7253e018?rik=XJ%2fipuppX9Ja6g&pid=ImgRaw&r=0'
  }

  const allCurrencies = [dolar, dolarBlue, euro, euroBlue]

  useEffect(() => {
    if (data) {
      dolar.value = data?.oficial?.value_sell
      dolarBlue.value = data?.blue?.value_sell
      euro.value = data?.oficial_euro?.value_sell
      euroBlue.value = data?.blue_euro?.value_sell
    }
  }, [data])


  const [selected, setSelected] = useState(dolarBlue)

  const [convert, setConvert] = useState(1)

  const [modal, setModal] = useState(false)

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
      <View className="bg-white p-4 w-full rounded-t-3xl my-8 flex-1 flex flex-col items-center">
        <View className="bg-[#ececff] p-4 w-full rounded-xl m-auto">
          <View className='flex flex-row items-center gap-2 mb-4'>
            <Image className='w-6 h-4' source={{ uri: 'https://th.bing.com/th/id/R.fa0f419da5da93f8122bdb2a140cd4ce?rik=sdDGU2Nf8AUV%2bg&pid=ImgRaw&r=0' }}></Image>
            <Text className='font-semibold text-lg text-zinc-600'>Peso Argentino</Text>
          </View>
          <TextInput className='bg-white p-4 rounded-lg' placeholder="Ingrese un número" value={convert} onChangeText={setConvert} />
        </View>

        <View className="bg-[#ececff] p-4 w-full rounded-xl m-auto">
          <View className='flex flex-row justify-between'>
            <View className='flex flex-row items-center gap-2 mb-4'>
              <Image className='w-6 h-4' source={{ uri: selected.image }}></Image>
              <Text className='font-semibold text-lg text-zinc-600'>{selected.name}</Text>
            </View>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8050/8050813.png' }} className='h-6 w-6'></Image>
            </TouchableOpacity>
          </View>
          <View className='bg-white p-4 rounded-lg' placeholder="Ingrese un número">
            <TextInput>{isNaN(Number(convert) / Number(selected?.value)) ? 'Ingrese un número valido' : (Number(convert) / Number(selected?.value))}</TextInput>
          </View>
        </View>
      </View>
      {/* Fill background */}
      <View className='absolute w-full left-0 bottom-0 h-16 bg-white -z-10'></View>
      {/* Modal */}
      {
        modal &&
        <View className='absolute w-full left-0 bottom-0 h-full bg-white z-10 flex items-center justify-center'>
          {
            allCurrencies.map((c, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => {
                  setSelected(c)
                  setModal(false)
                }}>
                  <View className='flex flex-row p-8 items-center gap-4'>
                    <Image className='w-6 h-4' source={{ uri: c.image }}></Image>
                    <Text className='font-semibold text-lg text-zinc-600'>{c.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      }
    </View>
  )
}
