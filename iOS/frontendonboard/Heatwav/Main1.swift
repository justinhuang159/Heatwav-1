//
//  Main1.swift
//  Heatwav
//
//  Created by Stanley Zeng on 12/1/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

class Main1: TableViewController {
    
    var locations = [Location]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let locationService: LocationService = LocationService()
        locations = locationService.readLocation()
        locations.sort { $0.distance < $1.distance }
        self.tableView.reloadData()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cellIdentifier = "cell"
        let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier, for: indexPath) as! LocationTableViewCell
        
        // Configure the cell
        cell.nameLabel.text = locations[indexPath.row].name
        cell.thumbnailImageView.image = UIImage(named: locations[indexPath.row].image)
        cell.locationLabel.text = locations[indexPath.row].location
        cell.typeLabel.text = locations[indexPath.row].type
        return cell
    }
}
/*
This is what I have implemented in AppDelegate to capture the user's location:

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, CLLocationManagerDelegate {
    
    var window: UIWindow?
    var locationManager:CLLocationManager!
    private var currentCoordinate:CLLocationCoordinate2D?
    var currentLocation:CLLocation?
    
    static var locations: Array<Location> = Array()
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        // Location Manager
        func setupLocationManager() {
            locationManager = CLLocationManager()
            locationManager?.delegate = self
            self.locationManager?.requestAlwaysAuthorization()
            locationManager?.desiredAccuracy = kCLLocationAccuracyBest
            locationManager?.startUpdatingLocation()
        }
    }
    
    return true
}

// Location Manager
func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if currentLocation == nil {
        currentLocation = locations.last
        locationManager?.stopMonitoringSignificantLocationChanges()
        let locationValue:CLLocationCoordinate2D = manager.location!.coordinate
        print("locations = \(locationValue)")
        locationManager?.stopUpdatingLocation()
    }
}
*/
