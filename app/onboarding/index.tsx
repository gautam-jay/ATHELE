import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      {/* Mock Phone Screen */}
      <View style={styles.phoneContainer}>
        <View style={styles.phoneScreen}>
          <LinearGradient
            colors={['#FF6B35', '#F7931E', '#FFD700']}
            style={styles.phoneGradient}
          >
            <View style={styles.statusBar}>
              <Text style={styles.statusText}>TELUS</Text>
              <Text style={styles.statusText}>2:30 PM</Text>
              <Text style={styles.statusText}>6%</Text>
            </View>
            
            <View style={styles.reportContainer}>
              <Text style={styles.reportTitle}>Last report</Text>
              
              <View style={styles.heightCards}>
                <View style={styles.currentHeightCard}>
                  <Text style={styles.cardLabel}>Current height</Text>
                  <Text style={styles.heightValue}>5'6</Text>
                </View>
                
                <View style={styles.potentialHeightCard}>
                  <Text style={styles.cardLabel}>Potential height</Text>
                  <Text style={styles.potentialValue}>6'1%</Text>
                </View>
              </View>
              
              <View style={styles.optimizeSection}>
                <Text style={styles.optimizeText}>Optimize up to 1.4 inch 🚀</Text>
              </View>
              
              <View style={styles.chartSection}>
                <Text style={styles.chartLabel}>Height / Age</Text>
                <View style={styles.ageIndicator}>
                  <Text style={styles.ageText}>59</Text>
                </View>
                <View style={styles.chartContainer}>
                  <View style={styles.chartLine} />
                  <View style={styles.chartDot} />
                </View>
                <Text style={styles.chartFooter}>Taller than 61% of your age 💡</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Predict your height</Text>
        <Text style={styles.subtitle}>
          Input your details to discover your future height and potential
        </Text>
        
        {/* Page Indicators */}
        <View style={styles.pageIndicators}>
          <View style={[styles.indicator, styles.activeIndicator]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        
        {/* CTA Button */}
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => router.push('/auth')}
        >
          <LinearGradient
            colors={['#FF6B35', '#F7931E']}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Let's start</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/auth')}>
          <Text style={styles.loginText}>You already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  phoneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  phoneScreen: {
    width: 280,
    height: 500,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  phoneGradient: {
    flex: 1,
    padding: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  reportContainer: {
    flex: 1,
  },
  reportTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
  },
  heightCards: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  currentHeightCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 15,
    borderRadius: 12,
    flex: 1,
  },
  potentialHeightCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 12,
    flex: 1,
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  heightValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  potentialValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  optimizeSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  optimizeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  chartSection: {
    flex: 1,
  },
  chartLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginBottom: 10,
  },
  ageIndicator: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  ageText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
  chartContainer: {
    height: 60,
    justifyContent: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  chartLine: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1,
  },
  chartDot: {
    width: 12,
    height: 12,
    backgroundColor: '#FFD700',
    borderRadius: 6,
    position: 'absolute',
    left: '60%',
    top: '50%',
    marginTop: -6,
  },
  chartFooter: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  mainContent: {
    padding: 30,
    alignItems: 'center',
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  pageIndicators: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333333',
  },
  activeIndicator: {
    backgroundColor: '#FF6B35',
  },
  ctaButton: {
    width: '100%',
    marginBottom: 20,
  },
  buttonGradient: {
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  loginText: {
    color: '#CCCCCC',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});