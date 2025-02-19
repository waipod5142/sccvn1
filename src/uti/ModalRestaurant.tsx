import { useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
// import { TokenType, Item } from '@/lib/typeCoupon';
interface Item {
  _id: string;
  id: string;
  date: string;
  restaurant: string;
  token: string;
}
interface TokenType {
  _id: string;
  id: string;
  date: string;
  token: string;
}
interface ModalRestaurantProps {
  // id: string;
  token: string;
  onClose: () => void;
}

const ModalRestaurant = ({ token, onClose }: ModalRestaurantProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent further clicks
    setIsSubmitting(true);

    if (!selectedRestaurant) {
      alert('Please select a restaurant');
      return;
    }

    try {
      const tokenLowerCase = token.toLowerCase();

      // Fetch the token details to verify if it's valid
      const tokenRes = await axios.get(
        `${http}permitTr_one?token=${tokenLowerCase}`,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      const today = new Date().toDateString();

      // First, filter for today's date
      const todayTokens = tokenRes.data.filter(
        (t: TokenType) => new Date(t.date).toDateString() === today
      );

      // Then, find the token matching `tokenLowerCase`
      const currentToken = todayTokens.find(
        (t: TokenType) => t.token === tokenLowerCase
      );

      if (!currentToken) {
        alert('กรุณาใส่รหัสที่ถูกต้อง Please enter the correct token.');
        return;
      }

      // Fetch the coupons to check the monthly limits
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const couponRes = await axios.get(
        `${http}vehicleTr_one?id=${currentToken.id}&bu=th&type=coupon`,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      const monthlyCoupons = couponRes.data.trans.filter((coupon: Item) => {
        const couponDate = new Date(coupon.date);
        return (
          couponDate.getMonth() === currentMonth &&
          couponDate.getFullYear() === currentYear
        );
      });

      console.log(couponRes);
      // Specific restaurants where tokens starting with 'h' are valid
      const specificRestaurantsForH = [
        'ณิชนิตา (2) สโมสร 1',
        'รวงทอง สโมสร 2',
        'ชนิดาภา สโมสร 3',
        'NichnitaS1',
        'RuangthongS2',
        'ChanidapaS3',
      ];

      // Specific restaurants where tokens not starting with 'h' are valid
      const specificRestaurantsForNonH = [
        'ณิชนิตา นันทวณิชกุล',
        'ณิชนิตานันทวณิชกุล',
        'ณิชนิตา%20นันทวณิชกุล',
        'ณิชนิตา',
        'วาสนา ขาวจัตุรัส',
        'วาสนาขาวจัตุรัส',
        'วาสนา%20ขาวจัตุรัส',
        'วาสนา',
        'ธัญชนก กิจหิรัญ',
        'ธัญชนกกิจหิรัญ',
        'ธัญชนก%20กิจหิรัญ',
        'ธัญชนก',
        'ธัญชนก%252520กิจหิรัญ',
        'Kruabaanrao',
        'ครัวบ้านเรา',
        //
        'ณิชนิตา (2) สโมสร 1',
        'รวงทอง สโมสร 2',
        'ชนิดาภา สโมสร 3',
        'NichnitaS1',
        'RuangthongS2',
        'ChanidapaS3',
      ];

      if (tokenLowerCase.startsWith('h')) {
        // Ensure 'h' tokens are used only at specific restaurants
        if (!specificRestaurantsForH.includes(selectedRestaurant)) {
          alert(
            'คูปองที่ขึ้นต้นด้วย "h" ใช้ได้เฉพาะที่ ณิชนิตา (2) สโมสร 1, รวงทอง สโมสร 2, ชนิดาภา สโมสร 3 เท่านั้น\n\nCoupons starting with "h" are only valid at specific restaurants.'
          );
          return;
        }

        const hCouponsCount = monthlyCoupons.filter((coupon: Item) =>
          coupon.token.startsWith('h')
        ).length;

        if (hCouponsCount >= 1) {
          alert(
            'คุณใช้คูปองที่ขึ้นต้นด้วย "h" มากกว่า 1 ครั้งต่อเดือน You have used the coupon starting with "h" more than once this month.'
          );
          return;
        }
      } else {
        // Ensure non-'h' tokens are used at valid restaurants
        if (!specificRestaurantsForNonH.includes(selectedRestaurant)) {
          alert(
            'คูปองที่ไม่ขึ้นต้นด้วย "h" ใช้ได้เฉพาะที่ โรงาน 1 - ณิชนิตา นันทวณิชกุล, โรงงาน 2 - วาสนา ขาวจัตุรัส, โรงงาน 3 - ธัญชนก กิจหิรัญ.'
          );
          return;
        }

        if (monthlyCoupons.length >= 21) {
          alert(
            'คุณใช้คูปองมากกว่า 21 ครั้งต่อเดือน You have used more than 21 coupons this month.'
          );
          return;
        }
      }

      if (monthlyCoupons.length >= 22) {
        alert(
          'คุณใช้คูปองรวมมากกว่า 22 ครั้งต่อเดือน You have used more than 22 coupons in total this month.'
        );
        return;
      }

      // All checks passed, post the data
      const res = await axios.post(`${http}rescueTr_post`, {
        id: currentToken.id,
        token: tokenLowerCase,
        restaurant: selectedRestaurant,
        bu: 'th',
        type: 'coupon',
      });

      if (res.status === 200) {
        // Delete the token from the other collection after successful post
        await axios.delete(
          `${http}rescueTr_delete?id=${currentToken._id}&bu=th&type=token`
        );
        window.location.reload();
        // alert('Data submitted successfully');
        // onClose(); // Close modal after submission
      } else {
        alert('Error submitting data');
      }
    } catch (error) {
      console.error('Error submitting restaurant data:', error);
      alert('Error submitting data');
    } finally {
      setIsSubmitting(false); // Re-enable button after request completion
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center">
          Select Restaurant
        </h2>
        <form className="space-y-4">
          <h2 className="p-2 rounded-md">คูปองอาหาร 40 บาท</h2>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant1"
              name="restaurant"
              value="ณิชนิตา นันทวณิชกุล"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant1"
              className="ml-4 text-white bg-rose-500 px-2 py-1 rounded-md"
            >
              สโมสร 1: ร้านณิชนิตา นันทวณิชกุล (ร้านอาหาร)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant2"
              name="restaurant"
              value="ณิชนิตา (2) สโมสร 1"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant2"
              className="ml-4 text-white bg-rose-500 px-2 py-1 rounded-md"
            >
              สโมสร 1: ร้านณิชนิตา นันทวณิชกุล_2 (ร้านเครื่องดื่มและขนม)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant3"
              name="restaurant"
              value="วาสนา ขาวจัตุรัส"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant3"
              className="ml-4 text-white bg-blue-500 px-2 py-1 rounded-md"
            >
              สโมสร 2: ร้านวาสนา ขาวจตุรัส (ร้านอาหาร)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant4"
              name="restaurant"
              value="รวงทอง สโมสร 2"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant4"
              className="ml-4 text-white bg-blue-500 px-2 py-1 rounded-md"
            >
              สโมสร 2: ร้านรวงทอง ด้วงประโคน (ร้านเครื่องดื่มและขนม)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant5"
              name="restaurant"
              value="ธัญชนก กิจหิรัญ"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant5"
              className="ml-4 text-white bg-orange-500 px-2 py-1 rounded-md"
            >
              สโมสร 3: ร้านธัญชนก กิจหิรัญ (ร้านอาหาร)
            </label>
          </div>

          {/* <hr />
          <h2 className="bg-green-500 text-white p-2 rounded-md">
            คูปองอาหารสุขภาพ 80 บาท
          </h2> */}

          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant6"
              name="restaurant"
              value="ชนิดาภา สโมสร 3"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant6"
              className="ml-4 text-white bg-orange-500 px-2 py-1 rounded-md"
            >
              สโมสร 3: ร้านชนิดาภา สร้อยผา (ร้านเครื่องดื่มและขนม)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="restaurant7"
              name="restaurant"
              value="ครัวบ้านเรา"
              className={`h-6 w-6 rounded-full shrink-0`}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            />
            <label
              htmlFor="restaurant7"
              className="ml-4 text-white bg-gray-500 px-2 py-1 rounded-md"
            >
              ครัวบ้านเรา: ศศิธร อ่อนศรี
            </label>
          </div>
        </form>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="mr-4 px-6 py-2 bg-gray-300 text-lg rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-2 ${
              isSubmitting ? 'bg-gray-400' : 'bg-blue-600'
            } text-white text-lg rounded hover:${
              isSubmitting ? '' : 'bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRestaurant;
