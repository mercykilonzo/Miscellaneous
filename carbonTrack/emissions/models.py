from django.db import models

from django.db import models

class Factory(models.Model):
    factory_id = models.AutoField(primary_key=True)
    factory_name = models.CharField(max_length=40) 
    factory_location = models.CharField(max_length=255)  
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"{self.factory_name} ({self.factory_location})"


class MCU(models.Model):
    mcu_id = models.AutoField(primary_key=True)  
    factory = models.ForeignKey(Factory, on_delete=models.CASCADE) 
    status = models.CharField(max_length=40)  
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"MCU {self.mcu_id} ({self.status})"


class Emission(models.Model):
    sensor_id = models.AutoField(primary_key=True)  
    device_id = models.CharField(max_length=100)  
    timestamp = models.DateTimeField(auto_now_add=True)
    wifi_rssi = models.IntegerField(null=True, blank=True)
    free_heap = models.IntegerField(null=True, blank=True)
    mcu = models.ForeignKey(MCU, on_delete=models.CASCADE)  
    emission_rate = models.DecimalField(max_digits=10, decimal_places=6)  
    updated_at = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return f"Emission {self.sensor_id} rate {self.emission_rate}"
