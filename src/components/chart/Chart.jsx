import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart() {
    const data = [
        {
          name: 'Mèo lông ngắn',
          "Số lượng": 4000,
         
        },
        {
          name: 'Mèo anh',
          "Số lượng": 3000,
        
        },
        {
          name: 'Chó Husky',
          "Số lượng": 2000,
          
        },
        {
          name: 'Chó Alaska',
         "Số lượng": 2780,
          
        },
        {
          name: 'Chuột Hamster',
          "Số lượng": 1890,
        
        },
        {
          name: 'Chó Corgi',
          "Số lượng": 2390,
          
        },
        {
          name: 'Rùa cảnh',
          "Số lượng": 3490,
          
        },
      ];
  return (
    <div className='chart'>
     <div className="chartTitle">Biểu đồ doanh thu trong tháng</div>   
    <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Số lượng" stroke="#5550bd"  />
            <YAxis  stroke="#5550bd"  />
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            <Legend/>
        </LineChart>
        
        
        </ResponsiveContainer> 
        
    </div>
  )
}
