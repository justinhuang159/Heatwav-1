//
//  Location.swift
//  Heatwav
//
//  Created by Stanley Zeng on 12/1/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

import Foundation
import MapKit
import CoreLocation

var currentLocation:CLLocation?

class Location: NSObject {
    var id: String = ""
    var name: String = ""
    var type: String = ""
    var location: String = ""
    var image: String = ""
    var activity: String = ""
    var rating: String = ""
    var latitude: Double = 0.0
    var longitude: Double = 0.0
    var distance: Double {
        get {
            return CLLocation(latitude: latitude, longitude: longitude).distance(from: currentLocation!)
        }
    }
    
    init(locationInfo:[String:Any]) {
        self.id = locationInfo["id"] as! String
        self.name = locationInfo["name"] as! String
        self.type = locationInfo["type"] as! String
        self.location = locationInfo["location"] as! String
        self.image = locationInfo["image"] as! String
        self.activity = locationInfo["activity"] as! String
        self.latitude = locationInfo["latitude"] as! Double
        self.longitude = locationInfo["longitude"] as! Double
    }
    
    public var coordinate: CLLocationCoordinate2D { get {
        let coordinate = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
        return coordinate
        }
    }
    
}
