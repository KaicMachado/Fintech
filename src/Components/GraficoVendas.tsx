import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

type VendaDia = {
    data : string,
    pago : number,
    processando : number,
    falha : number
}

function transformData(data: IVenda[]): VendaDia[] {
    const dias = data.reduce((acc: {[key:string]: VendaDia},item) => {
        const dia = item.data.split(' ')[0]
        if(!acc[dia]) {
            acc[dia] = {
                data : dia,
                pago : 0,
                falha : 0,
                processando : 0
            };
        } 
         acc[dia][item.status] += item.preco
        
        return acc
    }, {})
    
    return Object.values(dias).map(dia => ({...dia, data : dia.data.substring(5)})) 
}


const GraficoVendas = ({data}: {data: IVenda[]}) => {
    const transformedData = transformData(data);

  return (<ResponsiveContainer  height={400}>
  <LineChart 
    data={transformedData}
    >
        <XAxis dataKey='data' />
        <YAxis />
        <Legend />
        <Tooltip/>
        <Line type='monotone' dataKey='pago' stroke='#387908' strokeWidth={2} />
        <Line type='monotone' dataKey='processando' stroke='#fccb21'  strokeWidth={2} />
        <Line type='monotone' dataKey='falha' stroke='#ff7300'  strokeWidth={2} />

    </LineChart>
    </ResponsiveContainer>)
}

export default GraficoVendas