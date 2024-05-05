import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex } from '@chakra-ui/react'
import '../../Stylesheets/Cart/Cart.css';
import { CartContext } from '../../context/CartContext';
import { PiMinusCircleBold, PiPlusCircleBold, PiXCircleBold } from 'react-icons/pi';
import { Link as LinkReact } from "react-router-dom";

const Cart = () => {

  const { Cart, countItems, totalAmount , changeQuantity, removeItem, removeAllItems } = useContext(CartContext);
  return (
    <Flex justify={'center'} align={'center'}>
      {
      countItems() > 0 ?
        <TableContainer className={'cartContainer'} >
          <Table variant='striped' colorScheme='green' size='sm'>
            <TableCaption><button className='botonGeneral'  onClick={()=>removeAllItems()}>Vaciar Carrito</button><LinkReact to='/checkout' ><button className='botonGeneral'>Finalizar Compra</button></LinkReact></TableCaption>
            <Thead backgroundColor='#BDE9E3'>
              <Tr>
                <Th>Producto</Th>
                <Th>Isbm</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Subtotal</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                Cart.map((producto)=>
                  <Tr key={producto.id}>
                    <Td>{producto.nombre}</Td>
                    <Td>{producto.isbn}</Td>
                    <Td> {producto.cantidad}</Td>
                    <Td isNumeric> $ {producto.precio}</Td>
                    <Td isNumeric> $ {producto.cantidad*producto.precio}</Td>
                    <Td>
                      <button className='cartListButton' onClick={()=>changeQuantity(producto.id, 'add',producto.stock)}><PiPlusCircleBold/></button>
                      <button className='cartListButton' onClick={()=>changeQuantity(producto.id, 'sub',producto.stock)}><PiMinusCircleBold/></button>
                      <button className='cartListButton' onClick={()=>removeItem(producto.id)}><PiXCircleBold/></button>
                    </Td>
                  </Tr>
                )
              }
            </Tbody>
            <Tfoot backgroundColor='#BDE9E3'>
              <Tr>
                <Th>Monto total</Th>
                <Th colSpan='3'></Th>
                <Th isNumeric> $ {totalAmount()}</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        : <div className='sinProductos'>No hay productos en el carrito, agregue alguno y vuelva.</div>
    }
    </Flex>

)
}

export default Cart
