import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1B3B3B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center bg-[#1d4747] rounded-lg p-4 hover:bg-[#225252] transition-colors">
            <div className="bg-[#1B3B3B] p-3 rounded-full mr-4">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Phone Number</p>
              <p className="font-medium">+974 3118 1843</p>
            </div>
          </div>

          <div className="flex items-center bg-[#1d4747] rounded-lg p-4 hover:bg-[#225252] transition-colors">
            <div className="bg-[#1B3B3B] p-3 rounded-full mr-4">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Email Address</p>
              <p className="font-medium">Elbrithcqtr@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center bg-[#1d4747] rounded-lg p-4 hover:bg-[#225252] transition-colors">
            <div className="bg-[#1B3B3B] p-3 rounded-full mr-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Office Location</p>
              <p className="font-medium">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center border-t border-[#2d5555] pt-8">
          <div>
          <img
          src="https://media.licdn.com/dms/image/v2/C5112AQHM3vxRKwe1Pw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1538732227457?e=1740614400&v=beta&t=kplKTI5YSB9yN9lavo2cZTRV9RJT20l94hfrn4_1Nlc"
          alt="Logo"
          width={150}
          className="object-contain"
        />
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Your health, physical and emotional well-being is important to us.<br/> We are always by your side and have made it even easier for you <br/>to find the necessary vitamins.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2d5555] text-gray-300 text-sm flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
      </div>
    </footer>
  )
}

