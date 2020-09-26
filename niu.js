const strSerialNumber = ''
const strAppToken = ''
const strReqURL = "https://app-api.niu.com/v3/motor_data/index_info?sn=" + strSerialNumber

const objNiuReq = 
{
  url: strReqURL,
    headers: {
    token: strAppToken
    }
}

$httpClient.get(objNiuReq,function(err, resp, data) {
  if (err) {
	$notification.post("NIU ERROR","",err);
  } 
  else {
	const intNiuBatteryLevel = objNiuData["data"]["batteries"]["compartmentA"]["batteryCharging"]
	const intNiuEstMileage   = objNiuData["data"]["estimatedMileage"]
	const blnNiuCharging     = objNiuData["data"]["isCharging"]
	var strNiuChargingStatus = ""
	if (blnNiuCharging == 0) {
	    strNiuChargingStatus = "(Not Charging)"
	}
	else if (blnNiuCharging == 1) {
	    strNiuChargingStatus = "(Charging)"
	}
	const strNotificationText = "Battery Level:" + String(intNiuBatteryLevel) + "%" + strNiuChargingStatus + "\n" + "Estimated Mileage:" + String(intNiuEstMileage)
	+ "KM"
	$notification.post("NIU Helper","",strNotificationText);
	$done()
  }
})
