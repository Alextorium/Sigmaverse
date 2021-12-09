
import { PieChart, Pie, Tooltip, Sector} from "recharts";
import TokenomicsB from '../assets/Tokenomics.png'
export default function Tokenomics() {

    const data01 = [
  
        { name: "Liquity", value: 20, fill: '#FFD66C' },
        { name: "Stacking contract", value: 10, fill: '#FD99FF' },
        { name: "Team", value: 10, fill: '#FFAA5C'},
        { name: "Presale", value: 55, fill: '#FF7575' },
        { name: "App", value: 5, fill: '#70A9FF' },
     
     ];
    return (
        <div id='tokenomicsmobile' className='mobile font-face-MSR'>
          <h2 className='font-face-MSR' style={{color: 'white', fontWeight: 700, paddingRight: '220px'}}>TOKENOMICS</h2>

        
        <br />
      <PieChart  width={300} height={300}>
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={data01}
        cx={160}
        cy={120}
        outerRadius={80}
        innerRadius={70}
        fill="#8884d8"
        label
      />
      <br />
      
      
      {/* <Tooltip /> */}
      </PieChart>
      <img src={TokenomicsB} alt="tokenomics-mobile" />
      <br />
        </div>
    )
    }


